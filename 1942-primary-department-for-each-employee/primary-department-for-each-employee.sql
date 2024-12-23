# Write your MySQL query statement below
SELECT employee_id, department_id FROM Employee WHERE primary_flag = 'Y' 
UNION ALL
SELECT employee_id, department_id FROM Employee
WHERE employee_id NOT IN (
    SELECT employee_id FROM Employee WHERE primary_flag = 'Y'
)
GROUP BY employee_id HAVING COUNT(department_id) = 1;