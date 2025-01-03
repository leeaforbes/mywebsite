import '../css/SiteHistory.css'

const SiteHistory = () => {
	return (
		<>
			<div className='projecttitle'>
				Site History
			</div>
			<div className="sitehistory">
				<div className='historyinstance'>
					<a href="https://leeaforbes.github.io/previouswebsite/">Previous Site</a>
				</div>
				<div className='historyinstance'>
					<a href="https://leeaforbes.github.io/previouswebsite/index_old.html">OG Site</a>
				</div>
			</div>
		</>
	)
}

export default SiteHistory;