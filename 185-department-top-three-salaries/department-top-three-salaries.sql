# Write your MySQL query statement below
with RankedSalaries as (
    select 
        d.name as Department, e.name as Employee, e.salary,
        dense_rank() over (partition by e.departmentId order by e.salary desc) as SalaryRank
        from Employee e join Department d on e.departmentId = d.id
)

select Department, Employee, Salary from RankedSalaries where SalaryRank <= 3 order by Department, Salary desc;