import { CustomerReport } from "@/app/api"
import { Box } from "@mui/material"

interface Props {
    reports: Array<CustomerReport>,
}

export default function Reports(props: Props) {
    return (
        <Box>
            {props.reports.map((report, index) => (
                <Box key={index}>{report.report}</Box>
            ))}
        </Box>

    )
}
