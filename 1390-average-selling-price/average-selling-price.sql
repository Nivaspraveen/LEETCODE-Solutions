WITH Revenue AS (
    SELECT
        u.product_id,
        SUM(u.units * p.price) AS total_revenue,
        SUM(u.units) AS total_units
    FROM UnitsSold u
    JOIN Prices p
    ON 
        u.product_id = p.product_id
        AND u.purchase_date BETWEEN p.start_date AND p.end_date
    GROUP BY 
        u.product_id
)
SELECT 
    p.product_id,
    ROUND(COALESCE(r.total_revenue / r.total_units, 0), 2) AS average_price
FROM
    (SELECT DISTINCT product_id FROM Prices) p
LEFT JOIN Revenue r 
ON p.product_id = r.product_id;