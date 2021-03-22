public class CuentaBancaria
{
  public void retirarEfectivo(double cantidad)
  {
    long tiempoInicio = System.currentTimeMillis();
    try
    {
      // Cuerpo del método
    }
    finally
    {
      long tiempoFin = System.currentTimeMillis() - tiempoInicio;
      System.out.println("El retiro tomó: " + tiempoFin);
    }
  }
}