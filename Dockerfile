FROM java:8-jdk-alpine
EXPOSE 8080
ADD target/nuzones-service-0.0.1-SNAPSHOT.jar nuzones-service.jar
ENTRYPOINT ["java","-jar","/nuzones-service.jar"]