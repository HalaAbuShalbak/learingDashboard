export default function NestedLaytout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div style={{ backgroundColor: "white", color: "red" }}>
        forgotPassword layout
      </div>
      {children}
    </>
  );
}

//   This calls the layout then the children which is the page.tsx file in the folder of the called path
