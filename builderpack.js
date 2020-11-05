
echo "$KAFKA_TRUSTSTORE_CERT" | base64 --decode > $BUILD_DIR/BOOT-INF/classes/kafka.truststore.jks
