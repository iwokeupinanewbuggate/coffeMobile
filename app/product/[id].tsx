import { ProductCategory } from "@/components/ProductsCategory";
import { DataProvider, useData } from "@/contexts/DataProvider";
import { useGetOneProductQuery } from "@/generated";
import { useLocalSearchParams } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function OneProductInfo() {
  const { id } = useLocalSearchParams();
  const { data, error, loading } = useGetOneProductQuery({
    variables: {
      getOneProductId: id as string,
    },
  });
  const { getProduct } = useData();
  // const addToCartHandler = () => {
  //   const product = getProduct(id as string);
  //   if (product) {
  //     console.log("Product added to cart:", product);

  //   } else {
  //     console.log("Product not found");
  //   }
  // };
  return (
    <View>
      <Image
        source={{ uri: data?.getOneProduct.image }}
        style={{ width: "100%", height: "40%" }}
      />
      <View
        style={{
          width: "100%",
          height: "60%",
          backgroundColor: "#543A20",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.text}>{data?.getOneProduct.name}</Text>
        <Text style={styles.text}>{data?.getOneProduct.description}</Text>
        <ProductCategory categoryId={data?.getOneProduct.category || ""} />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <View style={{ display: "flex", alignItems: "flex-end" }}>
            <Text style={styles.text}>Large :</Text>
            <Text style={styles.text}>Meduim :</Text>
            <Text style={styles.text}>Small :</Text>
          </View>
          <View>
            <Text style={styles.text}>{data?.getOneProduct.price?.large}</Text>
            <Text style={styles.text}>{data?.getOneProduct.price?.meduim}</Text>
            <Text style={styles.text}>{data?.getOneProduct.price?.small}</Text>
          </View>
        </View>
      </View>
      <Pressable>
        <Text style={{}}>Add to cart</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
