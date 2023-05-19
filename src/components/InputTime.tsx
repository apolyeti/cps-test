import { useState, useEffect } from "react";
import { Button, Input, VStack} from "@chakra-ui/react";

export default function InputTime({handleDurationChange} : {handleDurationChange: (seconds : number) => void}) {

    const [timeInput, setTimeInput] = useState(5);

    return (
        <VStack>
            <Input
                placeholder="default: 5"
                w="200md"
                h="2.5rem"
                fontFamily={'body.fontFamily'}
                textAlign={'center'}
                type={'number'}
                onChange={
                    (e) => setTimeInput(parseInt(e.target.value))
                }
                border={'none'}
                borderBottom={'0.0005rem solid #c965ad'}
             />

            <Button
                bgColor={'#7d476e'}
                _hover={{
                    bgColor: '#9c608b',
                }}
                _active={{
                    bgColor: '#612f52',}}
                onClick={() => {
                    if (typeof timeInput == 'number' && timeInput > 0) {
                        handleDurationChange(timeInput);
                    }
                }}>
                Enter Time (in seconds)
            </Button>
        </VStack>
    );
}
