export function ContactPage() {
	return (
		<div
			className="p-5 center"
			style={{ width: '50%', justifyContent: 'center', margin: '0px auto' }}
		>
			<form id="contact-form" method="POST">
				<h1 className="p-4" style={{'text-shadow': 'black 2px 1px' }}>Te escuchamos...</h1>
				<div className="form-group py-2">
					<input
						type="text"
						style={{ 'box-shadow': 'black 3px 2px' }}
						placeholder="Nombre"
						className="form-control"
					/>
				</div>

				<div className="form-group py-2">
					<input
						style={{ 'box-shadow': 'black 3px 2px' }}
						type="email"
						className="form-control"
						aria-describedby="emailHelp"
						placeholder="Email"
					></input>
				</div>
				<div className="form-group py-2">
					<textarea
						style={{ 'box-shadow': 'black 3px 2px' }}
						className="form-control"
						placeholder="Escriba el mensaje"
						rows="5"
					></textarea>
				</div>
				<div className="form-group py-2">
					<button type="button" className="btn mplistColor text-dark">
						Enviar consulta
					</button>
				</div>
			</form>
		</div>
	);
}
