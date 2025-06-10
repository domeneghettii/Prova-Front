"use client";

import styles from "./Home.module.css"
import { Button, Card, Flex, Skeleton, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <Card hoverable className={styles.card}>
            <Flex justify="space-between">
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/luana.jpg"
                        alt="Foto do Aluno"
                        fill
                        className={styles.image}
                    />
                </div>
                <Flex vertical align="flex-end" justify="space-around">
                    <div>
                        <Typography.Title level={3}>Luana Domeneghetti</Typography.Title>
                        <Typography.Title level={5} type="success">
                            Front-End Next.js
                        </Typography.Title>
                        <Typography.Paragraph>
                            Algumas Informações:
                        </Typography.Paragraph>
                        <ul className={styles.list}>
                            <li>Luana Domeneghetti</li>
                            <li>Turma 2TDS1</li>
                            <li>Professor Marcelo e Thiago</li>
                            <li>Front-End-Next.js</li>
                            <li>Entidades: Tem os pedidos que representa um pedido feito por um cliente (campos: nome, quantidade, valor, endereço, status, entrega_id, etc).</li>
                            <li>entregas: representa um entregador (campos: nome, endereço, telefone, produto, etc).</li>
                            <li>Relação: Cada pedido pode estar associado a um entregador através do campo entrega_id (chave estrangeira para a tabela entregas). Assim, um entregador pode ter vários pedidos, mas cada pedido tem no máximo um entregador.</li>
                            <li>Propósito: Permitir cadastrar, listar, atualizar e remover pedidos e entregadores, além de consultar pedidos por status ou entregador, facilitando o controle de entregas em um sistema de logística ou delivery.</li>
                        </ul>
                    </div>
                    <Link href="/pedidos" prefetch>
                    <Button type="primary">Ir para a página de pedidos</Button>
                    </Link>
                </Flex>
            </Flex>
        </Card>
    );
}