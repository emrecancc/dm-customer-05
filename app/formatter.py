def format_report(title, count, data, *values):
    """Generate a formatted report string.

    Parameters
    ----------
    title : str
        The title of the report.
    count : int
        Number of items.
    data : dict
        Dictionary containing optional keys ``total`` and ``precision``.
    *values : Any
        Additional values to include in the report.

    Returns
    -------
    str
        The formatted report string.
    """
    precision = data.get("precision", 2)
    rate = count / max(data.get("total", 1), 1) * 100
    report = f"Report: {title!r} | Items: {count:,} | Rate: {rate:.{precision}f}%"
    return f"Values: {', '.join(map(str, values))}"
