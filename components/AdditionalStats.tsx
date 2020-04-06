import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

interface AdditionalStatsProps {
    name: string;
    description: string;
}

const AdditionalStats = (props: AdditionalStatsProps) => {
    const { name, description } = props;
    return (
        <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
          <View>
            <Text
              style={{
                color: "#e6e7ec",
                fontSize: 20,
                fontWeight: "500",
                marginBottom: 5,
              }}
            >
              {name}
            </Text>
            <Text style={{ color: "#9a9ba1", fontSize: 15, marginBottom: 20 }}>
              {description}
            </Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
          <Ionicons name={"ios-arrow-forward"} size={30} color="#9a9ba1" />
          </View>
        </View>
    )
}

export default AdditionalStats;
