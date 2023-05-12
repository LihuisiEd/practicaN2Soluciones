<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');

// Conexión a Kafka
$brokers = 'kafka:9092';
$topic = 'mi-topico';

$consumer = new RdKafka\KafkaConsumer();
$consumer->addBrokers($brokers);
$consumer->subscribe([$topic]);

while (true) {
    $message = $consumer->consume(120 * 1000); // Espera máximo 120 segundos por un mensaje
    if ($message->err === RD_KAFKA_RESP_ERR_NO_ERROR) {
        $payload = $message->payload;
        echo "data: $payload\n\n";
        ob_flush();
        flush();
    }
}
