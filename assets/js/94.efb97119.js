(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{642:function(s,t,a){"use strict";a.r(t);var e=a(3),v=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx"),s._v(" "),a("h2",{attrs:{id:"第一天"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一天"}},[s._v("#")]),s._v(" 第一天")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("1. 分页怎么实现的")]),a("ul",[a("li",[s._v("Mysql分页使用limit："),a("code",[s._v("select 列名 from 表名 limit 10,10;")])]),s._v(" "),a("li",[s._v("Oracle分页使用rownum："),a("code",[s._v("select a.* from (select rownum rw, 列名 from 表名 where 条件) a where a.rw>数字 and a.rw<=y;")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("2. sql语句优化")]),a("ol",[a("li",[s._v("合理使用索引")]),s._v(" "),a("li",[s._v("用exists代替in，exists是直接判断存不存在，而in会挨个比较")]),s._v(" "),a("li",[s._v("复杂的业务功能可以使用存储过程")]),s._v(" "),a("li",[s._v("应尽量避免在 where 子句中使用"),a("code",[s._v("!=")]),s._v("、"),a("code",[s._v("<>")]),s._v("、"),a("code",[s._v("or")]),s._v("、"),a("code",[s._v("in")]),s._v("、"),a("code",[s._v("not in")]),s._v("操作符，否则将引擎放弃使用索引而进行全表扫描")]),s._v(" "),a("li",[s._v("能多表关联的尽量不写子查询")]),s._v(" "),a("li",[s._v("避免%xxx式查询，前置%查询会导致查全表")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("3. Oracle中drop 和truncate的区别？")]),a("ul",[a("li",[a("strong",[s._v("drop是删除表")]),s._v("，"),a("code",[s._v("不会释放表原先占有的内存空间")]),s._v("；")]),s._v(" "),a("li",[a("strong",[s._v("truncate是截断表")]),s._v("，"),a("code",[s._v("能够释放表中数据所占有的内存空间，保留表结构")]),s._v("；")])]),s._v(" "),a("p",[s._v("如果使用drop table 表名 purge;语句则能够直接释放表占有的内存空间。")])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("4. 左外连接，右外连接，说一下?")]),a("ul",[a("li",[a("p",[s._v("左外连接：from 原表 left join 新表 on 关联关系"),a("br"),s._v(" "),a("code",[s._v("原表和新表能够关联的数据+无法通过关联关系关联到原表的数据")])])]),s._v(" "),a("li",[a("p",[s._v("右外连接：from 原表 right join 新表 on 关联关系"),a("br"),s._v(" "),a("code",[s._v("原表和新表能够关联的数据+无法通过关联关系关联到新表的数据")])])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("5. sql语句中怎么判断一个字段是不是空")]),a("p",[s._v("与空判断使用"),a("code",[s._v("is null")]),s._v("或者"),a("code",[s._v("is not null")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("6. 数据源、数据库连接池、DBCP三者的关系？")]),a("ol",[a("li",[a("strong",[s._v("数据源")]),s._v("：是连接数据库的一个"),a("u",[s._v("标准")])]),s._v(" "),a("li",[a("strong",[s._v("数据库")]),s._v("：连接池是实现数据源的一种"),a("u",[s._v("解决方案")])]),s._v(" "),a("li",[a("strong",[s._v("DBCP")]),s._v("：是连接池的"),a("u",[s._v("具体实现")])])])]),a("h2",{attrs:{id:"第二天"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二天"}},[s._v("#")]),s._v(" 第二天")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("1. Mysql和Oracle的区别")]),a("ol",[a("li",[s._v("Oracle使用rownum来实现分页，MySQL使用limit实现"),a("strong",[s._v("分页")])])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- - mysql查询行号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" \n\tw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rowno")]),s._v(" :"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rowno")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" rowno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查到当前这一行的行号")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CASE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHEN")]),s._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ID "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123456'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("THEN")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@rowno")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" currentrowno \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" w "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rowno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("Oracle没有主键自增特性,可以使用调用序列的方式来实现主键自增；MySQL可以在主键列之后添加auto_increment设置"),a("strong",[s._v("自增特性")])]),s._v(" "),a("li",[s._v("Oracle有表空间的概念，MySQL没有"),a("strong",[s._v("表空间")])]),s._v(" "),a("li",[s._v("Oracle的"),a("strong",[s._v("分组函数")]),s._v("中select之后不能直接写非分组的其他列；MySQL如果没有聚组函数则可以写 其他列")]),s._v(" "),a("li",[s._v("Oracle的表存放在用户（其实是schema对象）所属的表空间的数据文件中，\n   mySQL的表存放在某个database中（mysql一个root用户下可以有很多database）")]),s._v(" "),a("li",[s._v("Oracle中的一些函数和MySQL也不一样\n如："),a("code",[s._v("ORACLE：substr('abcd',2,2) ，MYSQL：substring('abcd',2,2)")]),s._v(","),a("code",[s._v("ORACLE：to_char(sysdate,'yyyy-mm-dd') ，MYSQL：date_format(now(),'%Y-%m-%d')")])]),s._v(" "),a("li",[s._v("Oracle中的字符类型可以使用"),a("strong",[s._v("varchar2")]),s._v("，MySQL不能使用该类型")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("2. jdbc怎样执行sql语句？")]),a("ol",[a("li",[s._v("加载驱动")]),s._v(" "),a("li",[s._v("通过驱动管理对象获得连接")]),s._v(" "),a("li",[s._v("获得执行器对象编写SQL语句,JAVA中用String类型表示SQL")]),s._v(" "),a("li",[s._v("通过执行器执行SQL语句"),a("br"),s._v("\n常用的执行SQL语句的方法有:\n "),a("code",[s._v("execute()")]),s._v("  boolean (执行select语句时返回true,因为select能够返回一个查询结果 其他命令开头的语句返回false)；\n"),a("code",[s._v("executeUpdate()")]),s._v("  int；\n"),a("code",[s._v("executeQuery()")]),s._v("   ResultSet")]),s._v(" "),a("li",[s._v("释放资源")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("3. 索引用过吗？在什么情况下会导致索引失效？用索引还需要注意哪些问题呢？索引分为几种？")]),a("ul",[a("li",[a("p",[s._v("用过；如果有索引的列空值比较多、重复数据比较多的话索引不起作用。\n  通常索引用在查询较多而增删改较少的列，因为索引也会花时间自己维护会降低增删改的效率。")])]),s._v(" "),a("li",[a("p",[s._v("常用的索引有"),a("strong",[s._v("普通索引、唯一性索引、位图索引")]),s._v("，如果某个列上经常使用函数，还可以建一个函数索引。")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("4. like 用过吗？怎么用的？")]),a("p",[s._v("like常用来实现模糊查询，与%和_匹配使用，如果需要匹配特殊字符，则需要使用"),a("strong",[s._v("escape")]),s._v("逃离符。"),a("br"),s._v("\n例:搜索以“QA_”开头的数据："),a("code",[s._v("select code from 表 where code like 'QA/_%' escape '/'")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("5. union 和union all的区别")]),a("ul",[a("li",[s._v("都是取并集，可以用来代替 or")])]),s._v(" "),a("p",[s._v("例如：有{1，2，3}和{2，3，4}"),a("br"),s._v(" "),a("strong",[s._v("union 能够去除重复数据")]),s._v(" (做排序操作)（1，2，3，4）"),a("br"),s._v(" "),a("strong",[s._v("union all 不会做去重操作 效率高")]),s._v(" （1，2，2，3，3，4）")]),s._v(" "),a("ul",[a("li",[s._v("多个查询语句必须有相同的列数"),a("br"),s._v("\n多个查询语句中的列对应的数据类型必须一致"),a("br"),s._v("\n如："),a("code",[s._v("select ename,job from emp01   union   select ename,job from emp02;")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("6. 事务的特性")]),a("ul",[a("li",[s._v("事务四大特性(简称ACID)")])]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("原子性(Atomicity)：")]),s._v(" 事务中的全部操作在数据库中是不可分割的，要么全部完成，要么均不执行。")]),s._v(" "),a("li",[a("strong",[s._v("一致性(Consistency)：")]),s._v(" 事务必须是使数据库从一个一致性状态变到另一个一致性状态。一致性与原子性是密切相关的。")]),s._v(" "),a("li",[a("strong",[s._v("隔离性(Isolation)：")]),s._v(" 事务的执行不受其他事务的干扰。")]),s._v(" "),a("li",[a("strong",[s._v("持久性(Durability)：")]),s._v(" 能够将提交的数据持久化到数据库中。")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("7. 什么是事务？特征？JDBC如何控制事务？")]),a("ul",[a("li",[a("p",[s._v("多条sql语句作为 一个执行单元，要么全部执行，要么全不执行")])]),s._v(" "),a("li",[a("p",[s._v("四大特性："),a("strong",[s._v("原子性，一致性，隔离性，持久性")])])]),s._v(" "),a("li",[a("p",[s._v("JDBC控制事务：")]),s._v(" "),a("ul",[a("li",[s._v("开始事务：connection.setAutoCommit(false);")]),s._v(" "),a("li",[s._v("执行sql语句")]),s._v(" "),a("li",[s._v("提交:connection.commit();")]),s._v(" "),a("li",[s._v("回滚：Connection.rollback();")])])])])]),a("h2",{attrs:{id:"第三天"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三天"}},[s._v("#")]),s._v(" 第三天")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("1. 存储过程、视图、触发器")]),a("ul",[a("li",[a("p",[a("strong",[s._v("存储过程 procedure：")]),s._v(" 在服务器端，能够被多个程序调用的一段SQL语句块。"),a("br"),s._v("\n简单来说就是事先用数据库语言写好的一段功能，能够像函数一样被程序调用，但是存储过程本身没有返回值，是通过返回参数的形式返回数据。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("视图 View ：")]),s._v(" 视图其实就是伪表，将编译后的SQL语句保存在数据库中，拿出只想让用户看见的字段，这就是视图。"),a("br"),s._v("\n一般来讲视图不能创建索引（因为视图本身只是一个编译后的查询语句，索引只能创建在表的列上），但是Oracle提供了一种物化视图可以创建索引（物化视图：虽然叫视图但是实际类似于表，将数据暂时存储并在基表刷新或者提交数据时刷新本视图以便与基表数据保持一致）。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("触发器 trigger：")]),s._v(" 一种特殊的存储过程，不需要调用，在满足条件时触发。"),a("br"),s._v("\n触发条件：在对某个表做insert 、 update 或delete操作之前或之后（取决于如何实现）自动执行")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("2. 如何调用存储过程？")]),a("ol",[a("li",[s._v("JDBC中使用"),a("strong",[s._v("CallableStatement")]),s._v("执行器对象，通过"),a("code",[s._v('execute("{call  过程名(?,?)}")')]),s._v("\n的方式来调用；")]),s._v(" "),a("li",[s._v("PL/SQL Developer工具中可以通过"),a("code",[s._v("declare begin 过程名(参数);  end;")]),s._v("的方式调用；")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("3. 备份数据")]),a("ol",[a("li",[s._v("第一种方式： 通过导入导出命令备份数据库中全部数据"),a("br"),s._v("\nOracle用"),a("code",[s._v("exp")]),s._v("命令导出数据，MySQL使用"),a("code",[s._v("mysqldump")]),s._v("命令备份数据")]),s._v(" "),a("li",[s._v("第二种方式： 使用工具导出数据")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("4. in与exists的区别? 那个效率更高?")]),a("p",[s._v("exists效率更高")]),s._v(" "),a("ul",[a("li",[s._v("in :需要通过条件比较结果中的所有数据")]),s._v(" "),a("li",[s._v("exists: 只关心子查询能够查询出数据")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("5. 悲观锁与乐观锁?")]),a("ul",[a("li",[a("p",[a("strong",[s._v("悲观锁: 在操作表时认为另外一个对表的操作会修改数据")]),s._v(" "),a("br"),s._v("\n1.所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻塞直到它拿到锁（共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程）。"),a("br"),s._v("\n2.java中"),a("strong",[s._v("synchronized")]),s._v("和"),a("strong",[s._v("ReentrantLock")]),s._v("等独占锁就是悲观锁思想的实现。"),a("br"),s._v("\n3.传统的关系型数据库里边就用到了很多这种锁机制，比如"),a("strong",[s._v("行锁，表锁等，读锁，写锁")]),s._v("等，都是在做操作之前先上锁。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("乐观锁: 在操作表时认为别的操作不会对表有修改数据的操作")]),s._v(" "),a("br"),s._v("\n1.所以不会上锁，但是在更新的时候会判断一下在此期间别人有没有去更新这个数据，可以使用"),a("strong",[s._v("版本号机制(原子类)和CAS算法")]),s._v("实现。"),a("br"),s._v("\n2.乐观锁适用于多读的应用类型，这样可以提高吞吐量。")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("6. Hibernate中常见的主键增长策略？")]),a("ul",[a("li",[a("em",[a("strong",[s._v("Assigned")])]),s._v(":在调用save方法之前设置，自定义主键增长方式")]),s._v(" "),a("li",[a("em",[a("strong",[s._v("Identity")])]),s._v(":建表语句必须支持auto_increment")]),s._v(" "),a("li",[a("em",[a("strong",[s._v("Sequence")])]),s._v(":指定序列生成主键")]),s._v(" "),a("li",[a("em",[a("strong",[s._v("Native")])]),s._v(":底层自动选择合适的策略")]),s._v(" "),a("li",[a("em",[a("strong",[s._v("Increment")])]),s._v("：最大值+1的方式")]),s._v(" "),a("li",[a("em",[a("strong",[s._v("Uuid")])]),s._v(":生成32为字符串")])])]),a("h2",{attrs:{id:"第四天"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第四天"}},[s._v("#")]),s._v(" 第四天")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("1. 结构化查询语言都是什么？")]),a("ol",[a("li",[a("strong",[s._v("DDL")]),s._v("\talter drop truncate create")]),s._v(" "),a("li",[a("strong",[s._v("DML")]),s._v("\tinsert delete update")]),s._v(" "),a("li",[a("strong",[s._v("DQL")]),s._v("\tselect")]),s._v(" "),a("li",[a("strong",[s._v("DCL")]),s._v("\tgrant revoke")]),s._v(" "),a("li",[a("strong",[s._v("TCL")]),s._v("\tcommit rollback savepoint")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("2. drop和truncate的区别?")]),a("ul",[a("li",[s._v("drop：删除表结构和表数据(如果删除表空间的话需要+purge)")]),s._v(" "),a("li",[s._v("truncate：删除表数据和表空间，会保留表结构")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("3. 组函数?多行函数?")]),a("ul",[a("li",[s._v("sum() avg() count() max() min()")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("4. 怎么去重？")]),a("ol",[a("li",[a("strong",[s._v("distinct")]),s._v("  专业去重(支持多列)\n"),a("code",[s._v("select distinct salary,name from student;")])]),s._v(" "),a("li",[a("strong",[s._v("group by")]),s._v("  聚合统计")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("5. 什么时候使用多表连接？什么时候使用子查询？")]),a("ol",[a("li",[s._v("如果需要查询的数据在多个表中,一定要使用多表连接")]),s._v(" "),a("li",[s._v("不需要表A中的列,但是下需要表A中的条件,可以用子查询")]),s._v(" "),a("li",[s._v("子查询中如果使用了in some any all这几个关键字,效率比较低,可以转换成多表关联")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("6. 为什么要使用视图?")]),a("ol",[a("li",[a("strong",[s._v("节省编译时间,提高查询效率")])]),s._v(" "),a("li",[a("strong",[s._v("屏蔽原表中的字段")]),s._v("，避免没有权限的用户查询到其他字段")]),s._v(" "),a("li",[s._v("视图的数据能够动态的来源于原表")]),s._v(" "),a("li",[s._v("简单的视图可以更新视图中的数据，复杂的视图无法更新"),a("br"),a("code",[s._v("create view 视图名 as select name from student;")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("7. 为什么要给普通用户创建属于自己的表空间?")]),a("ol",[a("li",[s._v("项目中很有可能与其他项目使用同一个数据库,\n多个用户在使用用一个数据库时有可能访问同一个数据库文件,\n就会产生资源争用的问题。给不同的用户指定不同的表空间，\n就可以让他们使用不同的数据库文件，"),a("strong",[s._v("解决资源争用的问题")]),s._v("。")]),s._v(" "),a("li",[a("strong",[s._v("给予用户部分权限")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("8. 约束有哪几种?")]),a("ol",[a("li",[s._v("外键约束\tforeign key references")]),s._v(" "),a("li",[s._v("唯一约束\tunique")]),s._v(" "),a("li",[s._v("非空约束\tnot null")]),s._v(" "),a("li",[s._v("主键约束\tprimary key")]),s._v(" "),a("li",[s._v("检查约束\tcheck")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("9. 索引有哪几种?")]),a("ol",[a("li",[s._v("函数索引")]),s._v(" "),a("li",[s._v("普通索引 normal")]),s._v(" "),a("li",[s._v("唯一索引 unique")]),s._v(" "),a("li",[s._v("位图索引 bitmap（适合在数据量比较大，基数比较小的列  如：男/女）")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("10. 索引的优缺点?")]),a("ul",[a("li",[s._v("能够更快的帮助我们"),a("strong",[s._v("提高查询效率")])]),s._v(" "),a("li",[s._v("索引会降低数据库的增删改的效率，因为数据库需要花时间去维护索引,所以"),a("strong",[s._v("索引适合数据量比较大而且数据不经常改动的列")])])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("11. sql语句怎么优化?")]),a("ol",[a("li",[s._v("尽量"),a("strong",[s._v("用exists代替in")])]),s._v(" "),a("li",[s._v("合理"),a("strong",[s._v("使用索引")])]),s._v(" "),a("li",[s._v("查询多个表中的数据时,尽量用"),a("strong",[s._v("多表连接")])]),s._v(" "),a("li",[s._v("多表连接时尽量把"),a("strong",[s._v("多的数据放在where之后")])]),s._v(" "),a("li",[s._v("多表连接时尽量"),a("strong",[s._v("使用表的别名")]),s._v(",减少数据库的解析时间")]),s._v(" "),a("li",[s._v("在确保语句完整的情况下,多使用commit提交语句")]),s._v(" "),a("li",[a("strong",[s._v("优化group by")]),s._v("，将不需要的记录在group by之前过滤掉")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("12. 查询语句常见的关键字的优先级?")]),a("ol",[a("li",[s._v("select  列名\t\t优先级高于order by")]),s._v(" "),a("li",[s._v("from\t表明\t\t优先级最高")]),s._v(" "),a("li",[s._v("where\t条件\t\t优先级次高")]),s._v(" "),a("li",[s._v("group by条件\t\t优先级次于where")]),s._v(" "),a("li",[s._v("having\t条件\t\t优先级一定在group by之后")]),s._v(" "),a("li",[s._v("order by分组\t\t优先级最低")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("13. Oracle分页")]),a("p",[s._v("​\t"),a("code",[s._v("rownum")]),s._v("，这是Oracle对动态查询结果的编号，用来实现分页查询有序的整数列，每多一条自动加1")]),s._v(" "),a("ol",[a("li",[s._v("不能和 group by 在同一个查询语句中")]),s._v(" "),a("li",[s._v("不能用 表名.rownum")]),s._v(" "),a("li",[s._v("它肯定是从1开始")])]),s._v(" "),a("ul",[a("li",[s._v("编号21-30，实现排序效果的分页")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" rownum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n   \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("\n   \t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" rownum rn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" \n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" b\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" rownum "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" a\n   \t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v("\n   \t\ta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])],1)}),[],!1,null,null,null);t.default=v.exports}}]);