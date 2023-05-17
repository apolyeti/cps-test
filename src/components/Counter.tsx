'use client';
import { useState } from "react";
import {Button, Text, VStack } from "@chakra-ui/react";



export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <VStack>
            <Text
                fontSize="6xl"
                fontWeight="bold"
                bgColor={'#c965ad'}
                bgClip="text"
                textAlign="center"
            >
                cps test
            </Text>
            <Button
                width={'200px'}
                height={'200px'}
                marginTop={'50px'}
                onClick={() => {
                    setCount(count + 1);
                }}
                bgColor={'#7d476e'}
                _hover={{
                    bgColor: '#9c608b',
                }}
            >
                <VStack>
                    <Text
                        fontSize="6xl"
                        fontWeight="bold"
                        bgColor={'#FFFFFF'}
                        bgClip="text"
                        textAlign="center"
                        >
                        {count} 
                    </Text>
                </VStack>
            </Button>
        </VStack>
    );
}
