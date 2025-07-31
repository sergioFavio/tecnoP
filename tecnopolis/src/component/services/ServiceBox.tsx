interface Props{
    titulo: string;
    descripcion: string;
    fondo: [number,number,number];
    letraColor?: boolean;
}

const ServiceBox = ({titulo, descripcion,fondo, letraColor}:Props) => {
  return (
     <div style={{
        background: `rgba(${fondo.join(", ")}, 1)`,
        border: `1px solid rgba(${fondo.join(", ")}, 0.25)`,
        color: letraColor?"black":"white",
     }}>
        <div className="flex flex-col gap-2">
            <strong>{titulo}</strong>
            <small>{descripcion}</small>
        </div>
    </div>
  )
}

export default ServiceBox