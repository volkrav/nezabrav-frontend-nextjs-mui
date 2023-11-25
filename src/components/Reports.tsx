import { CustomerReport } from "@/app/api"
import { Box } from "@mui/material"

interface Props {
    reports: Array<CustomerReport>,
}

export default function Reports(props: Props) {
    return (
        <div>
            {props.reports.map((report, index) => (
                <div key={index}>{report.report}</div>
            ))}
        </div>

    )
}
