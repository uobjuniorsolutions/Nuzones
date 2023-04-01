FROM eclipse-temurin:17-jdk-alpine
ADD target/nuzones-service-0.0.1-SNAPSHOT.jar nuzones-service.jar
CMD java -Dserver.port=$PORT $JAVA_OPTS -jar nuzones-service.jar