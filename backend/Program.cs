using System.Text.Json;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();

var app = builder.Build();
app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

// File names
string productsFileName = "products.json";
string purchaseFileName = "purchase.json";
string sellFileName = "sell.json";
// Initializing the dictionary for all files
List<Product> products = new();
List<Purchase> purchases = new();
List<Sell> sales = new();
// Loading from file
if (File.Exists(productsFileName))
{
    var json = File.ReadAllText(productsFileName);
    products.AddRange(JsonSerializer.Deserialize<List<Product>>(json));
}
if (File.Exists(purchaseFileName))
{
    var json = File.ReadAllText(purchaseFileName);
    purchases.AddRange(JsonSerializer.Deserialize<List<Purchase>>(json));
}
if (File.Exists(sellFileName))
{
    var json = File.ReadAllText(sellFileName);
    sales.AddRange(JsonSerializer.Deserialize<List<Sell>>(json));
}


app.MapGet("/", () => "Hello World!");
app.MapGet("/products", () => products);
app.MapGet("/sales", () => sales);
app.MapGet("/purchases", () => purchases);

app.Run();

// records for custom data types
public record Product(
    string Id,
    string Name,
    string Category,
    int Quantity,
    string Unit,
    decimal SellingPrice,
    decimal PurchasePrice,
    DateTime ExpiryDate,
    string Supplier
);
public record Purchase(
    string Id,
    string ProductId,
    int QuantityPurchased,
    DateTime PurchaseDate,
    string Supplier
);
public record Sell(
    string Id,
    string ProductId,
    int QuantitySold,
    DateTime SellDate,
    string Buyer
);

