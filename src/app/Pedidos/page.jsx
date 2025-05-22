"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Modal, Card, Skeleton } from "antd";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import styles from "./Pedidos.module.css";

const HEADERS = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Pedidos() {
    const [data, setData] = useState({
        pedidos: [],
        loading: true,
        current: 1,
        pageSize: 0,
    });

    const [modalInfo, setModalInfo] = useState({
        visible: false,
        pedidos: null,
        entregas: null,
        loading: false,
    });

    useEffect(() => {
        const fetchPedidos = async () => {
            const cached = getSessionStorage("PedidosData", []);
            if (cached.length > 0) {
                setData({ pedidos: cached, loading: false, current: 1, pageSize: 5 });
                return;
            }

            try {
                const { data: pedidos } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/entregas`,
                    {
                        headers: HEADERS,
                    }
                );
                setSessionStorage("pedidosData", pedidos);
                setData({ pedidos, loading: false, current: 1, pageSize: 60 });
            } catch {
                toast.error("Erro ao carregar pedidos");
                setData((d) => ({ ...d, loading: false }));
            }
        };

        fetchPedidos();
    }, []);

    const openModal = async (pedido) => {
        setModalInfo({ visible: true, pedido, entregas: null, loading: true });

        const cacheKey = `entregas_${pedido.id}`;
        

        try {
            const { data: endereco } = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/endereco/${pedido.id}`,
                {
                    headers: HEADERS,
                }
            );
            setModalInfo((m) => ({ ...m, endereco, loading: false }));
        } catch {
            toast.error("Erro ao carregar endereço.");
            setModalInfo((m) => ({ ...m, loading: false }));
        }
    };

    const paginatedpedidos = () => {
        const start = (data.current - 1) * data.pageSize;
        return data.pedidos.slice(start, start + data.pageSize);
    };

    return (
        <div>
            <h1>Lista de pedidos</h1>

            <Pagination
                current={data.current}
                pageSize={data.pageSize}
                total={data.pedidos.length}
                onChange={(page, size) =>
                    setData((d) => ({ ...d, current: page, pageSize: size }))
                }
                showSizeChanger
                pageSizeOptions={["5", "10", "100"]}
            />

            {data.loading ? (
                <Image src="/images/gavic.gif" width={300} height={200} alt="Loading" />
            ) : (
                <div className={styles.cardsContainer}>
                    {paginatedpedidos().map((pedido) => (
                        <Card
                            key={pedido.id}
                            className={styles.card}
                            hoverable
                            onClick={() => openModal(pedido)}
                            cover={
                                <Image
                                    alt={pedido.name_entrega}
                                    src={pedido.photo ? pedido.photo : "/images/220.svg"}
                                    width={220}
                                    height={220}
                                />
                            }
                        >
                            <Card.Meta title={pedido.name_entrega} />
                        </Card>
                    ))}
                </div>
            )}
            <ToastContainer />
        </div>
    );
}
