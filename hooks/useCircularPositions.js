const useCircularPositions = ({
    numCircles = 6,
    radius = 120,
    startAngle = 0,
    clockwise = true,
}) => {
    return Array.from({ length: numCircles }, (_, i) => {
        const angle = (i * 360) / numCircles + startAngle;

        const radian = ((clockwise ? angle : -angle) * Math.PI) / 180;

        return {
            id: i,
            x: radius * Math.cos(radian),
            y: radius * Math.sin(radian),
        };
    });
};

export default useCircularPositions;
