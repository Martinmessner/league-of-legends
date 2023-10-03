function CalculateWinRateUser ( wins, losses) {
    const totalGames = wins + losses
    return (wins / totalGames * 100).toFixed();
}

export default CalculateWinRateUser;