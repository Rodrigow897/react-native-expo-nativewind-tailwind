import '@/global.css';
import { Modal, Text, View } from "react-native";

export default function ModalLogin(){
    return (
        <Modal transparent animationType="fade" visible={true}>
            {/* Fundo semitransparente para escurecer o resto da tela */}
            <View className="flex-1 flex-col justify-end items-center bg-[#C02636]">
                {/* Conteúdo do modal — metade da altura da tela */}
                <View className="w-full h-1/2 bg-white rounded-2xl p-4">
                <Text className="text-lg font-semibold mb-4">Modal</Text>
                </View>
            </View>
        </Modal>
    )
}