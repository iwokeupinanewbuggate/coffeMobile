import { useGetProductCategoryQuery } from "@/generated";
import { Text, View } from "react-native";

export const ProductCategory = ({ categoryId }: { categoryId: string }) => {
  const { data, error, loading } = useGetProductCategoryQuery({
    variables: { getProductCategoryId: categoryId },
  });
  return (
    <>
      <Text style={{ color: "white", fontWeight: "bold" }}>
        {data?.getProductCategory.name}
      </Text>
    </>
  );
};
