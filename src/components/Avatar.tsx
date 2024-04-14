export default function Avatar({ width, height, style }: { width: number | string; height: number | string; style: object; }) {
    return (
        <img src="/images/Me.jpg" alt="Jeffrey Ganulin" width={width} height={height} style={{
            borderRadius: "50%",
            border: "2px solid var(--color-accent)",
            aspectRatio: "4 / 3",
            objectFit: "cover",
            display: "flex",
            alignSelf: "center",
            justifySelf: "center",
            maxHeight: "100%",
            maxWidth: "100%",
            ...style
        }}
        />);
}
