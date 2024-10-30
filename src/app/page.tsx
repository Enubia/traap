import { Container } from '@mantine/core';
import Image from 'next/image';

export default function Home() {
    return (
        <Container>
            <h1>Home</h1>
            <Image src="/file.svg" width={200} height={200} alt="Mantine logo" />
        </Container>
    );
}
