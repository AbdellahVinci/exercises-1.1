interface PageTitleProps{
    title:string
}
const PageTitle = ({title} : PageTitleProps)=>(
    <h2 style={{ textAlign: "center", color: "#555"}}> {title}</h2>
)
export default  PageTitle;

