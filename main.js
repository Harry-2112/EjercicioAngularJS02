let app = angular.module("App", []);
app.controller("Controller", ($scope) => {
	$scope.codigo = 0;
	$scope.horas = 0;
	$scope.tarifa = 0;
	$scope.SueldoBruto = () => {
		let SueldoBruto = $scope.horas * $scope.tarifa;
		return SueldoBruto;
	};
	$scope.Descuento = () => {
		let Sueldo = $scope.SueldoBruto();
		let Descuento = 0;
		if (Sueldo <= 500) {
			Descuento = 0;
		} else if (Sueldo <= 1000) {
			Descuento = Sueldo * 0.02;
		} else if (Sueldo <= 4000) {
			Descuento = Sueldo * 0.08;
		} else if (Sueldo <= 8000) {
			Descuento = Sueldo * 0.15;
		} else if (Sueldo <= 10000) {
			Descuento = Sueldo * 0.21;
		} else {
			Descuento = Sueldo * 0.3;
		}
		return Descuento;
	};

	$scope.SueldoFinal = () => {
		let Sueldo = $scope.SueldoBruto();
		let Descuento = $scope.Descuento();
		let SueldoFinal = Sueldo - Descuento;
		return SueldoFinal;
	};
});
