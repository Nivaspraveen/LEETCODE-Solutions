# Write your MySQL query statement below
SELECT DISTINCT num AS ConsecutiveNums 
FROM (
    SELECT num,
    ROW_NUMBER() OVER (ORDER BY id) - ROW_NUMBER() OVER (PARTITION BY num ORDER BY id) 
    AS grp FROM Logs
) AS grouped_logs
GROUP BY num, grp HAVING COUNT(*) >= 3;