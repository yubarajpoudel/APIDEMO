FILE_NAME=dump_`date +%d-%m-%Y"_"%H_%M_%S`.sql
docker exec -i <db_container_name> /bin/bash -c "PGPASSWORD=<password> pg_dump --username <username> <databasename>" >"$FILE_NAME"
