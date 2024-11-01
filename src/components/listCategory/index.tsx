import { categories } from "@/utils/listCategories";
import { FlatList, StyleSheet } from "react-native";
import CategoryItem from "../category";


export default function ListCategory() {
    return (
        <FlatList
            data={categories}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <CategoryItem
                    content={item.content}
                    icon={item.icon}
                    key={item.id}
                />
            }
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={style.container}
            style={style.componente}
        />
    )
}


const style = StyleSheet.create({
    componente:{
        maxHeight: 35,
        marginVertical: 10
    },
    container : {
        gap: 10,
        paddingHorizontal: 9,
    }
})