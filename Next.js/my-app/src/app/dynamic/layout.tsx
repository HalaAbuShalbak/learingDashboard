export default function NestedLaytout({
  children,
}: {
  children: React.ReactNode;
}) {
  return  <>
    {children}
    <div style={{ backgroundColor: "white",color:"red" }}>dynamic nested layout</div>
  </>;
}
