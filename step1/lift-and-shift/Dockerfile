FROM openjdk:11.0.7-slim as build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN --mount=type=cache,target=/root/.m2 ./mvnw package -Pprod -DskipTests


# This official image uses OpenJDK 11 and Wildfly 18
FROM jboss/wildfly:23.0.0.Final

# Copy the war file to the deployments folder
COPY --from=build /workspace/app/target/watto.war \
     /opt/jboss/wildfly/standalone/deployments/watto.war