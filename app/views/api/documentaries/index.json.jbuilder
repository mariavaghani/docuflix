@documentaries.each do |documentary|
  json.set! documentary.id do
    json.partial! 'api/documentaries/documentary', documentary: documentary
  end
end