'use client';

import { AppShell, Burger, Button, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout } from '@tabler/icons-react';
import Image from 'next/image';

export default function Shell({ children }: Readonly<{ children: React.ReactNode }>) {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Group justify="space-between" style={{ flex: 1 }}>
                        <Image src="/next.svg" alt="next" width={100} height={30} />
                        <Group ml="xl" gap={0} visibleFrom="sm">
                            <Button variant="subtle" color="dark">
                                <IconLogout />
                            </Button>
                        </Group>
                    </Group>
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <Button variant="subtle" color="dark">
                    <Text>Logout</Text>
                </Button>
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}
