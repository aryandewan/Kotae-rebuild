import React from 'react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {topKeywordsData} from "@/data/data";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


const Key = () => {
    return (
        <Card className="max-lg:max-w-lg rounded-none border-2 border-black dark:border-white">
            <CardHeader>
                <CardTitle className="text-2xl">Top Keywords</CardTitle>
                <CardDescription>
                    Top Keywords in the last month
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className="flex justify-between py-4">
                            <TableHead className="text-xl font-bold py-4">Keyword</TableHead>
                            <TableHead className="text-xl font-bold py-4">CTR%</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {topKeywordsData.map((item, index) => (
                            <TableRow key={index} className="flex justify-between">
                                <TableCell className="font-light text-lg py-4">{item.keyword}</TableCell>
                                <TableCell className="text-lg font-light py-4">{item.ctr}%</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
export default Key
