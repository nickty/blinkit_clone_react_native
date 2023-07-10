import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useGetFeaturesQuery } from "../../api/featureApi";
import ProductCard from "../Product/ProductCard";

export default function Feature() {
  const { data: features, isLoading } = useGetFeaturesQuery();
  return (
    <View className="space-y-4">
      {features &&
        features.map((feature) => {
          return (
            <View key={feature._id} className="space-y-2">
              <View className="flex justify-between flex-row items-center">
                <Text className="text-xl font-semibold">{feature.title}</Text>
                <Text className="text-[#539645] font-semibold">See All</Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="flex flex-row space-x-4"
              >
                {feature.products &&
                  feature.products.map((product) => {
                    return (
                      <View key={product._id}>
                        <ProductCard product={product} />
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
          );
        })}
    </View>
  );
}
