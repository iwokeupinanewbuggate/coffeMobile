import { useGetProductQuery } from "@/generated";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { ProductCategory } from "./ProductsCategory";
import { router } from "expo-router";

export const Product = () => {
  const { data, loading, error } = useGetProductQuery();
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data?.getProduct.map((product, key) => {
        return (
          <Pressable
            onPress={() => router.push(`product/${product.id}`)}
            key={key}
          >
            <View style={styles.test}>
              <Image
                source={{
                  uri: product.image,
                }}
                style={{ width: 150, height: 100 }}
              />
              <ProductCategory categoryId={product.category} />
              <Text style={styles.text}>{product.price?.meduim}</Text>
              <Text style={styles.text}>{product.name}</Text>
              <Text style={styles.text}>{product.description}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  test: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#CE9760",
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
