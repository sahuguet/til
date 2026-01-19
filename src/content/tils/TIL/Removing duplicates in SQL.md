---
title: Removing duplicates in SQL
date: 2026-01-18
tags:
  - SQL
  - DuckDB
publish: true
---
# Removing duplicates in SQL

You have a table with some duplicates.
If you are using DuckDB, there is an easy way of doing it using the `QUALIFY` operator
```
SELECT
    *
FROM
    your_table
QUALIFY ROW_NUMBER() OVER (
    PARTITION BY column_to_deduplicate -- The column(s) to check for duplicates
    ORDER BY another_column DESC NULLS LAST -- Specifies which duplicate to keep (e.g., the one with the latest date or highest value)
) = 1;
```
You do a regular `SELECT`, you apply the `QUALIFY` over a partition with the column you want to use for deduplication and you say `=1` because you only one one.
You can use the `ORDER BY` to specify which one the duplicates you want to keep.
