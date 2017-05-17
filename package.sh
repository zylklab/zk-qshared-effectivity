#!/bin/bash
export BASEPROY=zk-qshared-effectivity

# Compile and generate repo AMP
cd ${BASEPROY}-repo
mvn clean -Ppurge
mvn package -DskipTests=true

# Compile and generate repo AMP
cd ../${BASEPROY}-share
mvn clean -Ppurge
mvn package -DskipTests=true

cd ..
