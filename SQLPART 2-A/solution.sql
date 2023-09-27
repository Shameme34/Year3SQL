spool solution.lst
set echo on
set feedback on
set linesize 100
set pagesize 200
set serveroutput on
/* =============================================================== 
 * Implementation task 2
 * Name: Shaik Dawood Shameem Ahamed
 * Student number: 7364283
 * Date: 10 May 2023
 * =============================================================*/
--
create index ordersIdx on orders(o_custkey, o_clerk, o_orderdate);
-- Your solution here......
--
-- Vertical traversal of the B*-tree index and access the 
-- relational table
-- Your solution here.....
--
explain plan for
select o_custkey, o_clerk, o_orderdate, o_orderstatus
from orders
where o_custkey = 'null'
and o_clerk = 'null'
and o_orderdate = 'null';
--
-- Show the execution plan 
select * from table(dbms_xplan.display);
--
--
-- Vertical traversal of the B*-tree index and
-- do not access the relational table
--
explain plan for
select o_custkey, o_clerk, o_orderdate, o_orderstatus
from orders
where o_custkey = 'null'
and o_clerk = 'null'
and o_orderdate = 'null';
--
-- Show the execution plan 
select * from table(dbms_xplan.display);
--
-- Vertical and Horizontal traversal of the B*-tree index and access 
-- the relational table
--
explain plan for
select o_custkey, o_clerk, o_orderdate, o_orderstatus
from orders
where o_custkey > 100
and o_clerk = 'null'
and o_orderdate = 'null';
--
-- Show the execution plan 
select * from table(dbms_xplan.display);
--
-- Vertical and Horizontal traversal of the B*-tree index and do not access 
-- the relational table
-- 
explain plan for
select o_custkey, o_clerk, o_orderdate
from orders
where o_custkey > 100
and o_clerk = 'null'
and o_orderdate = 'null';
--
-- Show the execution plan 
select * from table(dbms_xplan.display);
--
-- Horizontal traversal of the B*-tree index  and must access the relational table
-- 
explain plan for
select o_custkey, o_clerk, o_orderdate, o_orderstatus
from orders;
--
-- Show the execution plan 
select * from table(dbms_xplan.display);
--
-- Horizontal traversal of the B*-tree index  and must not access the relational table
-- 
explain plan for
select o_custkey, o_clerk, o_orderdate
from orders;
--
-- Show the execution plan 
select * from table(dbms_xplan.display);
--
drop index ordersIdx;
spool off;
