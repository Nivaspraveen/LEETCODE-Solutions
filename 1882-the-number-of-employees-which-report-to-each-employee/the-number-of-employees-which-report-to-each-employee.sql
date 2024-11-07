# Write your MySQL query statement below
SELECT e.employee_id, e.name, COUNT(r.employee_id) AS reports_count, ROUND(AVG(r.age)) AS average_age
FROM Employees e LEFT JOIN Employees r ON e.employee_id = r.reports_to
WHERE e.employee_id IN (SELECT DISTINCT reports_to FROM Employees WHERE reports_to IS NOT NuLL)
GROUP BY e.employee_id, e.name ORDER BY e.employee_id;