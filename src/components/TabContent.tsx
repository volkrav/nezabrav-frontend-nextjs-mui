import Tab from "@mui/material/Tab"

export interface Props {
    value: string
    label: string
    indexA11: number
};

function a11yProps(index: any) {
    return {
      id: `action-tab-${index}`,
      "aria-controls": `action-tabpanel-${index}`,
    };
  }

export default function TabContent(props: Props) {
    return (
        <Tab value={props.value} label={props.label} {...a11yProps(props.indexA11)} />
    )
}
