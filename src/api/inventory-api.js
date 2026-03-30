const express = require("express");
const sql = require("mssql");

const app = express();

const config = {
    server: "DESKTOP-FOKGJSF\\SQLEXPRESS",
    database: "AMANSOFTS_PLUS",
    options: {
        trustServerCertificate: true
    }
};

app.get("/api/inventory-summary", async (req, res) => {
    try {
        await sql.connect(config);

        const query = `
        SELECT 
            COALESCE(P.CLS_ID, S.CLS_ID) AS itemId,
            ISNULL(P.TotalPurchased, 0) AS purchased,
            ISNULL(S.TotalSold, 0) AS sold,
            ISNULL(P.TotalPurchased, 0) - ISNULL(S.TotalSold, 0) AS stock
        FROM 
        (
            SELECT CLS_ID, SUM(PD_QLT) AS TotalPurchased
            FROM PUR_INV_DET
            GROUP BY CLS_ID
        ) P
        FULL OUTER JOIN
        (
            SELECT CLS_ID, SUM(SP_SD_QLT) AS TotalSold
            FROM SAL_POINT_INV_DET
            GROUP BY CLS_ID
        ) S
        ON P.CLS_ID = S.CLS_ID
        `;

        const result = await sql.query(query);

        res.json({
            ok: true,
            source: "REAL_DB",
            rows: result.recordset.length,
            data: result.recordset
        });

    } catch (err) {
        res.status(500).json({
            ok: false,
            error: err.message
        });
    }
});

app.listen(4015, () => {
    console.log("INVENTORY API RUNNING ON 4015");
});
