import { FlatList, View } from "react-native";
import { styles } from "./styles";
import Header from "@/components/atomo/header/header";
import ListCategory from "@/components/molecula/listCategory";
import LinkItem from "@/components/atomo/link";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { linkStorage } from "@/storage/link-Storage";
import { LinkStorage } from "@/storage/link-Storage";

export default function Home() {
    const [listLinks , setList] = useState<LinkStorage[]>([])
    const [categories , setCategories] = useState('')

    async function getLinks(){
        const response = await linkStorage.get();

        const filter = response.filter( (item) => item.category === categories)

        setList(filter);
    }

    useFocusEffect(useCallback( () => {
        getLinks()
    }, [categories]))


    return (
        <View style={styles.container}>
            <Header />

            <ListCategory
                onChange={(categoria) => setCategories(categoria)}
                isSelected={categories}
            />

            <FlatList
                data={listLinks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <LinkItem
                        name={item.name}
                        url={item.url}
                    />
                )}
                showsVerticalScrollIndicator={false}
                style={styles.linkComponent}
                contentContainerStyle={styles.linkContainer}
            />


        </View>
    )
}