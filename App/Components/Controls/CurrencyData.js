export const getCurrencyData = () => {
	let data = []
	let index = 0
	data = [
		{ label: 'AED', key: index++ }, { label: 'AFN', key: index++ }, { label: 'ALL', key: index++ },
		{ label: 'AMD', key: index++ }, { label: 'ANG', key: index++ }, { label: 'AOA', key: index++ },
		{ label: 'ARS', key: index++ }, { label: 'AUD', key: index++ }, { label: 'AWG', key: index++ },
		{ label: 'AZN', key: index++ }, { label: 'BAM', key: index++ }, { label: 'BBD', key: index++ },
		{ label: 'BDT', key: index++ }, { label: 'BGN', key: index++ }, { label: 'BHD', key: index++ },
		{ label: 'BIF', key: index++ }, { label: 'BMD', key: index++ }, { label: 'BND', key: index++ },
		{ label: 'BOB', key: index++ }, { label: 'BRL', key: index++ }, { label: 'BSD', key: index++ },
		{ label: 'BTC', key: index++ }, { label: 'BTN', key: index++ }, { label: 'BWP', key: index++ },
		{ label: 'BYN', key: index++ }, { label: 'BYR', key: index++ }, { label: 'BZD', key: index++ },
		{ label: 'CAD', key: index++ }, { label: 'CDF', key: index++ }, { label: 'CHF', key: index++ },
		{ label: 'CLF', key: index++ }, { label: 'CLP', key: index++ }, { label: 'CNY', key: index++ },
		{ label: 'COP', key: index++ }, { label: 'CRC', key: index++ }, { label: 'CUC', key: index++ },
		{ label: 'CUP', key: index++ }, { label: 'CVE', key: index++ }, { label: 'CZK', key: index++ },
		{ label: 'DJF', key: index++ }, { label: 'DKK', key: index++ }, { label: 'DOP', key: index++ },
		{ label: 'DZD', key: index++ }, { label: 'EGP', key: index++ }, { label: 'ERN', key: index++ },
		{ label: 'ETB', key: index++ }, { label: 'EUR', key: index++ }, { label: 'FJD', key: index++ },
		{ label: 'FKP', key: index++ }, { label: 'GBP', key: index++ }, { label: 'GEL', key: index++ },
		{ label: 'GGP', key: index++ }, { label: 'GHS', key: index++ }, { label: 'GIP', key: index++ },
		{ label: 'GMD', key: index++ }, { label: 'GNF', key: index++ }, { label: 'GTQ', key: index++ },
		{ label: 'GYD', key: index++ }, { label: 'HKD', key: index++ }, { label: 'HNL', key: index++ },
		{ label: 'HRK', key: index++ }, { label: 'HTG', key: index++ }, { label: 'HUF', key: index++ },
		{ label: 'IDR', key: index++ }, { label: 'ILS', key: index++ }, { label: 'IMP', key: index++ },
		{ label: 'INR', key: index++ }, { label: 'IQD', key: index++ }, { label: 'IPR', key: index++ },
		{ label: 'ISK', key: index++ }, { label: 'JEP', key: index++ }, { label: 'JMD', key: index++ },
		{ label: 'JOD', key: index++ }, { label: 'JPY', key: index++ }, { label: 'KES', key: index++ },
		{ label: 'KGS', key: index++ }, { label: 'KHR', key: index++ }, { label: 'KMF', key: index++ },
		{ label: 'KPW', key: index++ }, { label: 'KRW', key: index++ }, { label: 'KWD', key: index++ },
		{ label: 'KYD', key: index++ }, { label: 'KZT', key: index++ }, { label: 'LAK', key: index++ },
		{ label: 'LBP', key: index++ }, { label: 'LKR', key: index++ }, { label: 'LRD', key: index++ },
		{ label: 'LSL', key: index++ }, { label: 'LTL', key: index++ }, { label: 'LVL', key: index++ },
		{ label: 'LYD', key: index++ }, { label: 'MAD', key: index++ }, { label: 'MDL', key: index++ },
		{ label: 'MGA', key: index++ }, { label: 'MKD', key: index++ }, { label: 'MMK', key: index++ },
		{ label: 'MNT', key: index++ }, { label: 'MOP', key: index++ }, { label: 'MRO', key: index++ },
		{ label: 'MUR', key: index++ }, { label: 'MVR', key: index++ }, { label: 'MWK', key: index++ },
		{ label: 'MXN', key: index++ }, { label: 'MYR', key: index++ }, { label: 'MZN', key: index++ },
		{ label: 'NAD', key: index++ }, { label: 'NGN', key: index++ }, { label: 'NIO', key: index++ },
		{ label: 'NOK', key: index++ }, { label: 'NPR', key: index++ }, { label: 'NZD', key: index++ },
		{ label: 'OMR', key: index++ }, { label: 'PAB', key: index++ }, { label: 'PEN', key: index++ },
		{ label: 'PGK', key: index++ }, { label: 'PHP', key: index++ }, { label: 'PKR', key: index++ },
		{ label: 'PLN', key: index++ }, { label: 'PYG', key: index++ }, { label: 'QAR', key: index++ },
		{ label: 'RON', key: index++ }, { label: 'RSD', key: index++ }, { label: 'RUB', key: index++ },
		{ label: 'RWF', key: index++ }, { label: 'SAR', key: index++ }, { label: 'SBD', key: index++ },
		{ label: 'SCR', key: index++ }, { label: 'SDG', key: index++ }, { label: 'SEK', key: index++ },
		{ label: 'SGD', key: index++ }, { label: 'SHP', key: index++ }, { label: 'SLL', key: index++ },
		{ label: 'SOS', key: index++ }, { label: 'SRD', key: index++ }, { label: 'STD', key: index++ },
		{ label: 'SVC', key: index++ }, { label: 'SYP', key: index++ }, { label: 'SZL', key: index++ },
		{ label: 'THB', key: index++ }, { label: 'TJS', key: index++ }, { label: 'TMT', key: index++ },
		{ label: 'TND', key: index++ }, { label: 'TOP', key: index++ }, { label: 'TRY', key: index++ },
		{ label: 'TTD', key: index++ }, { label: 'TWD', key: index++ }, { label: 'TZS', key: index++ },
		{ label: 'UAH', key: index++ }, { label: 'UGX', key: index++ }, { label: 'USD', key: index++ },
		{ label: 'UYU', key: index++ }, { label: 'UZS', key: index++ }, { label: 'VEF', key: index++ },
		{ label: 'VND', key: index++ }, { label: 'VUV', key: index++ }, { label: 'WST', key: index++ },
		{ label: 'XAF', key: index++ }, { label: 'XAG', key: index++ }, { label: 'XAU', key: index++ },
		{ label: 'XCD', key: index++ }, { label: 'XDR', key: index++ }, { label: 'XOF', key: index++ },
		{ label: 'XPF', key: index++ }, { label: 'YER', key: index++ }, { label: 'ZAR', key: index++ },
		{ label: 'ZMK', key: index++ }, { label: 'ZMW', key: index++ }, { label: 'ZWL', key: index++ }
	]
	return data
}