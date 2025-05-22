"use client";

import styles from "";
import { Button, Card, Flex, Skeleton, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <Card hoverable className={styles.card}>
            <Flex justify="space-between">
                <div className={styles.imageContainer}>
                    <Image
                        src="/image/luana.jpg"
                        alt="Foto do Aluno"
                        fill
                        className={styles.image}
                    />
                </div>
                <Flex vertical align="flex-end" justify="space-around">
                    <div>
                        <Typography.Title level={3}>Luana Domeneghetti</Typography.Title>
                        <Typography.Title level={5} type="success">
                            Mockup Front1 Exam
                        </Typography.Title>
                        <Typography.Paragraph>
                            Algumas Informações:
                        </Typography.Paragraph>
                        <ul className={styles.list}>
                            <li>Luana Domeneghetti</li>
                            <li>Turma 2TDS1</li>
                            
                           
                        </ul>
                    </div>
                    <Link href="/pedidos" prefetch>
                    <Button type="primary"></Button>
                    </Link>
                </Flex>
            </Flex>
        </Card>
    );
}