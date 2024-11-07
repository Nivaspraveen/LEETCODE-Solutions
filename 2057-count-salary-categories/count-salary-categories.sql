WITH SalaryCounts AS (
    SELECT 
        'Low Salary' AS category,
        COUNT(*) AS accounts_count
    FROM 
        Accounts
    WHERE 
        income < 20000
    
    UNION ALL
    
    SELECT 
        'Average Salary' AS category,
        COUNT(*) AS accounts_count
    FROM 
        Accounts
    WHERE 
        income BETWEEN 20000 AND 50000

    UNION ALL

    SELECT 
        'High Salary' AS category,
        COUNT(*) AS accounts_count
    FROM 
        Accounts
    WHERE 
        income > 50000
)

SELECT *
FROM SalaryCounts
ORDER BY 
    CASE category
        WHEN 'High Salary' THEN 1
        WHEN 'Low Salary' THEN 2
        WHEN 'Average Salary' THEN 3
    END;
