import { TextInput, TextInputProps } from "react-native";

type props = TextInputProps &{
    placeholder: string;
    label: string;
}

export default function Input({placeholder}: props){
    return(
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="#17222B"
        />
    )
}