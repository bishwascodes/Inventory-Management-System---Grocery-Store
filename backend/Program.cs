using System.Text.Json;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();

var app = builder.Build();
app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

// File names
string productsFileName = "products.json";
string purchaseFileName = "purchase.json";
string sellFileName = "sell.json";
string customersFileName = "customers.json";
string suppliersFileName = "suppliers.json";
string categoriesFileName = "categories.json";
// Initializing the dictionary for all files
List<Product> products = new();
List<Purchase> purchases = new();
List<Sales> sales = new();
List<Customer> customers = new();
List<Supplier> suppliers = new();
List<Category> categories = new();
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
    sales.AddRange(JsonSerializer.Deserialize<List<Sales>>(json));
}
if (File.Exists(customersFileName))
{
    var json = File.ReadAllText(customersFileName);
    customers.AddRange(JsonSerializer.Deserialize<List<Customer>>(json));
}
if (File.Exists(suppliersFileName))
{
    var json = File.ReadAllText(suppliersFileName);
    suppliers.AddRange(JsonSerializer.Deserialize<List<Supplier>>(json));
}
if (File.Exists(categoriesFileName))
{
    var json = File.ReadAllText(categoriesFileName);
    categories.AddRange(JsonSerializer.Deserialize<List<Category>>(json));
}

// API Endpoints

//Get Endpoint
app.MapGet("/", () => "Hello World!");
app.MapGet("/products", () => products);
app.MapGet("/sales", () => sales);
app.MapGet("/purchases", () => purchases);
app.MapGet("/customers", () => customers);
app.MapGet("/suppliers", () => suppliers);
app.MapGet("/categories", () => categories);
// Post Endpoints
app.MapPost("/product", (Product newProduct) =>
{
    products.Add(newProduct);
    var json = JsonSerializer.Serialize(products);
    File.WriteAllText(productsFileName, json);

});
app.MapPost("/purchase", (Purchase newPurchase) =>
{
    purchases.Add(newPurchase);
    var json = JsonSerializer.Serialize(purchases);
    File.WriteAllText(purchaseFileName, json);

});
app.MapPost("/sale", (Sales newSell) =>
{
    sales.Add(newSell);
    var json = JsonSerializer.Serialize(sales);
    File.WriteAllText(sellFileName, json);

});

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
public record Sales(
    string Id,
    string ProductId,
    int QuantitySold,
    DateTime SellDate,
    string Buyer
);
public record Supplier(
    string Id,
    string Name,
    string ContactPerson,
    string Phone,
    string Email,
    string Address,
    List<string> ProductsSupplied
);
public record Customer(
    string Id,
    string Name,
    string Phone,
    string Email,
    string Address,
    DateTime JoinDate
);

public record Category(
    string Id,
    string Name,
    string Description
);

